import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducers/LayoutSlice";
import HeaderBookmarkSlice from "./Reducers/HeaderBookmarkSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import TableSearchSlice from "./Reducers/TableSearchSlice";
import ChatSlice from "./Reducers/ChatSlice";
import TaskSlice from "./Reducers/TaskSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import AddProductSlice from "./Reducers/AddProductSlice";
import ProductSlice from "./Reducers/ProductSlice";
import FilterSlice from "./Reducers/FilterSlice";
import CartSlice from "./Reducers/CartSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import FileManagerSlice from "./Reducers/FileManagerSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ContactSlice from "./Reducers/ContactSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import NumberingWizardSlice from "./Reducers/FormLayout/NumberingWizardSlice";
import StudentWizardSlice from "./Reducers/FormLayout/StudentWizardSlice";
import VerticalWizardSlice from "./Reducers/FormLayout/VerticalWizardSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    headerBookMark: HeaderBookmarkSlice,
    themeCustomizer: ThemeCustomizerSlice,
    search: TableSearchSlice,
    product: ProductSlice,
    addProduct:AddProductSlice,
    filterData: FilterSlice,
    cartData: CartSlice,
    project: ProjectSlice,
    fileManager:FileManagerSlice,
    bookmarkTab:BookmarkTabSlice,
    contact: ContactSlice,
    todo:ToDoSlice,
    chat:ChatSlice,
    task: TaskSlice,
    letterBox:LetterBoxSlice,    
    twoFactor: TwoFactorSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    formWizardTwo:FormWizardTwoSlice,
  },
});
export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
