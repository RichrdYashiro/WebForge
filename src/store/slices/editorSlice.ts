import  type { BlockType, IBlock } from '../../types/editor';
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {  IEditorState } from '../../types/editor'


const initialState: IEditorState = {
    blocks: [],
    selectedBlockId: null,
    projectName: 'WebForge'
}

const getDefaultContent = (type: BlockType) => {
  switch (type) {
    case 'heading':
      return { text: 'Заголовок сайта' };
    case 'paragraph':
      return { text: 'Начните вводить текст здесь...' };
    case 'button':
      return { label: 'Нажми меня' };
    case 'image':
      return { src: 'https://via.placeholder.com/150', alt: 'Placeholder' };
    default:
      return { text: 'Новый блок' };
  }
};

export const editorSlice = createSlice({
  name: 'editor',

  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<BlockType> ) => {
        const newBlock: IBlock = {
         id: nanoid(),
         type:action.payload,     
         content: getDefaultContent(action.payload),
            styles: {
                mt: 0,
                mb: 'md',
            }, 
        }
      state.blocks.push(newBlock);
    },

    selectBlock: (state, action: PayloadAction<string | null>) => {
      state.selectedBlockId = action.payload;
    },

    deleteBlock: (state, action: PayloadAction<string>) => {
        state.blocks = state.blocks.filter((block) => block.id !== action.payload)
    },
  },
})

export const { addBlock, selectBlock, deleteBlock } = editorSlice.actions;
export default editorSlice.reducer;