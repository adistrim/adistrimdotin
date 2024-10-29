import React from 'react';
import { Pencil, Trash2, Link, Github, Plus, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import BaseManagement from './BaseManagement';

interface Project {
    _id: string;
    title: string;
    description: string;
    link?: string;
    github?: string;
}

const initialProjectData: Project = {
    _id: '',
    title: '',
    description: '',
    link: '',
    github: '',
};

const ProjectForm: React.FC<{
    formData: Project;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = ({ formData, onChange }) => (
    <>
        <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <Input
                name="title"
                value={formData.title}
                onChange={onChange}
                required
            />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
                name="description"
                value={formData.description}
                onChange={onChange}
                required
            />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">Live Link (Optional)</label>
            <Input
                name="link"
                value={formData.link}
                onChange={onChange}
            />
        </div>
        <div className="space-y-2">
            <label className="text-sm font-medium">GitHub Link (Optional)</label>
            <Input
                name="github"
                value={formData.github}
                onChange={onChange}
            />
        </div>
    </>
);

const ProjectItem: React.FC<{
    item: Project;
    onEdit: (item: Project) => void;
    onDelete: (id: string) => void;
}> = ({ item, onEdit, onDelete }) => (
    <Card className="hover:bg-accent/50 transition-colors">
        <CardContent className="p-4">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
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
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex gap-2">
                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <Link className="h-4 w-4" />
                                Live
                            </Button>
                        </a>
                    )}
                    {item.github && (
                        <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <Github className="h-4 w-4" />
                                Code
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </CardContent>
    </Card>
);

const ProjectsManagement = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <BaseManagement<Project>
            title="Project"
            apiEndpoint="/api/projects"
            FormComponent={ProjectForm}
            ItemComponent={ProjectItem}
            initialFormData={initialProjectData}
        />
    );
};

export default ProjectsManagement;

// in this code, where I can call the PATCH method to update the project?
// You can call the PATCH method to update the project in the `BaseManagement` component.
// ok
