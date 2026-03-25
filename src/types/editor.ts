export type BlockType = 'button' | 'text' | 'image' | 'paragraph' | 'heading' ;
export interface IBlock  {
    id: string
  type: BlockType
  content: {
    text?: string;
    src?: string;
    label?: string;
  };
    styles: {
    mt?: number | string;
    mb?: number | string;
    color?: string;
    size?: string;
    radius?: string;
    backgroundColor?: string;
    textAlign?: 'left' | 'center' | 'right';
    borderRadius?: number;
  };
}

export interface IEditorState {
  blocks: IBlock[];
  selectedBlockId: string | null;
    projectName: string;
}
