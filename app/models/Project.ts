import mongoose, { Schema, Document } from 'mongoose';

export interface ProjectDocument extends Document {
  title: string;
  description: string;
  image: string;
  youtube_link: string;
  category: string;
}

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  youtube_link: { type: String, required: true },
  category: { type: String, required: true },
});

const Project = mongoose.models.Project || mongoose.model<ProjectDocument>('Project', projectSchema);

export default Project;
