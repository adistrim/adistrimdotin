import React from 'react';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import BaseManagement from './BaseManagement';

interface Recommendation {
    _id: string;
    text: string;
    author: string;
    type: string;
    profileLink: string;
}

const initialRecommendationData: Recommendation = {
    _id: '',
    text: '',
    author: '',
    type: '',
    profileLink: ''
};

const RecommendationForm: React.FC<{
    formData: Recommendation;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = ({ formData, onChange }) => (
    <>
        <div className="space-y-2">
            <label className="text-sm font-medium">Author</label>
            <Input
                name="author"
                value={formData.author}
                onChange={onChange}
                required
            />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Recommendation Text</label>
            <Textarea
                name="text"
                value={formData.text}
                onChange={onChange}
                required
            />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Position</label>
            <Input
                name="type"
                value={formData.type}
                onChange={onChange}
                required
                placeholder="CEO, Developer, etc."
            />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Profile Link</label>
            <Input
                name="profileLink"
                value={formData.profileLink}
                onChange={onChange}
                placeholder="LinkedIn/GitHub profile URL"
            />
        </div>
    </>
);

const RecommendationItem: React.FC<{
    item: Recommendation;
    onEdit: (item: Recommendation) => void;
    onDelete: (id: string) => void;
}> = ({ item, onEdit, onDelete }) => (
    <Card className="hover:bg-accent/50 transition-colors">
        <CardContent className="p-4">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="font-semibold">{item.author}</h3>
                        <p className="capitalize">{item.type}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(item)}
                        >
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onDelete(item._id)}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                    "{item.text}"
                </p>
                
                {item.profileLink && (
                    <div className="pt-2">
                        <a
                            href={item.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-1"
                            >
                                <ExternalLink className="h-4 w-4" />
                                View Profile
                            </Button>
                        </a>
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
);

const RecommendationsManagement = () => (
    <BaseManagement<Recommendation>
        title="Recommendation"
        apiEndpoint="/api/admin/recommendations"
        FormComponent={RecommendationForm}
        ItemComponent={RecommendationItem}
        initialFormData={initialRecommendationData}
    />
);

export default RecommendationsManagement;