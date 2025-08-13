export interface ServerToolParameter {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
}

export interface ServerTools {
  id: string;
  description?: string;
  parameters?: ServerToolParameter[];
}
