import React, { useState, useEffect } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface BaseManagementProps<T> {
    title: string;
    apiEndpoint: string;
    FormComponent: React.ComponentType<{
        formData: T;
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    }>;
    ItemComponent: React.ComponentType<{
        item: T;
        onEdit: (item: T) => void;
        onDelete: (id: string) => void;
    }>;
    initialFormData: T;
}

const BaseManagement = <T extends { _id: string }>({
    title,
    apiEndpoint,
    FormComponent,
    ItemComponent,
    initialFormData,
}: BaseManagementProps<T>) => {
    const [items, setItems] = useState<T[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const [formData, setFormData] = useState<T>(initialFormData);
    const [editingItem, setEditingItem] = useState<T | null>(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch(apiEndpoint);
            if (!response.ok) throw new Error(`Failed to fetch ${title}`);
            const data = await response.json();
            setItems(data);
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to load ${title}`,
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let response;
            if (editingItem) {
                response = await fetch(`${apiEndpoint}/${editingItem._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ ...formData, _id: editingItem._id }),
                });
            } else {
                // Remove _id for new items
                const { _id, ...submitData } = formData;
                response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(submitData),
                });
            }

            if (!response.ok) throw new Error(`Failed to save ${title}`);

            await fetchItems();
            setDialogOpen(false);
            setFormData(initialFormData);
            setEditingItem(null);

            toast({
                title: "Success",
                description: `${title} ${editingItem ? 'updated' : 'added'} successfully`,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to ${editingItem ? 'update' : 'add'} ${title}`,
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (item: T) => {
        setEditingItem(item);
        setFormData(item);
        setDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm(`Are you sure you want to delete this ${title}?`)) return;

        try {
            const response = await fetch(`${apiEndpoint}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error(`Failed to delete ${title}`);

            await fetchItems();
            toast({
                title: "Success",
                description: `${title} deleted successfully`,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: `Failed to delete ${title}`,
                variant: "destructive",
            });
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="flex items-center gap-2">
                                <Plus className="h-4 w-4" />
                                Add {title}
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    {editingItem ? `Edit ${title}` : `Add New ${title}`}
                                </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <FormComponent 
                                    formData={formData}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            {editingItem ? 'Updating...' : 'Adding...'}
                                        </>
                                    ) : (
                                        editingItem ? `Update ${title}` : `Add ${title}`
                                    )}
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex justify-center items-center p-8">
                            <Loader2 className="h-8 w-8 animate-spin" />
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {items.map((item) => (
                                <ItemComponent
                                    key={item._id}
                                    item={item}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default BaseManagement;
