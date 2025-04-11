export interface Project {
  id: number
  slug: string
  tech_stack: string[]
  project_url: string | null
  translations: ProjectTranslation[]
  created_at: string
  updated_at: string
}
export interface ProjectTranslation {
  id: number
  project_id: number
  language_id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}
