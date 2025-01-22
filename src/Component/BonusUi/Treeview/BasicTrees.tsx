// import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
// import { BasicTree } from "@/Constant";
// import { BasicTreeData, TreeViewList } from "@/Data/BonusUi/TreeView";
// import { BasicTreesProp } from "@/Types/BonusUiType";
// import cx from "classnames";
// import TreeView, { flattenTree } from "react-accessible-treeview";
// import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
// import { IoMdArrowDropright } from "react-icons/io";
// import { Card, CardBody } from "reactstrap";

// export const ArrowIcon:React.FC<BasicTreesProp> = ({ isOpen, className }) => {
//   const baseClass = "arrow";
//   const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen }, { [`${baseClass}--open`]: isOpen }, className);
//   return <IoMdArrowDropright className={classes} />;
// };

// export const CheckBoxIcon = ({ variant, ...rest }: BasicTreesProp) => {
//   switch (variant) {
//     case "all": return <FaCheckSquare color="#4AAD8A" {...rest} />; 
//     case "none": return <FaSquare color="white" {...rest} style={{ border: "1px solid #80808069" }} />;
//     case "some": return <FaMinusSquare {...rest} color="#1a5f7f" />; 
//     default: return null;
//   }
// };

// const BasicTrees = () => {
//   const treeData = flattenTree(TreeViewList);
  
//   return (
//     <Card>
//       <CommonCardHeader title={BasicTree} span={BasicTreeData} />
//       <CardBody>
//         <div className="tree-container">
//           <div className="checkbox">
//             <TreeView data={treeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards togglableSelect defaultSelectedIds={[4,9]} expandedIds={[1,2,6,10,14,27]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
//               return (
//                 <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1),marginTop:5 }} className="d-flex align-items-center">
//                   {isBranch && <ArrowIcon isOpen={isExpanded} />}
//                   <CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span></div>
//                 );
//               }}
//             />
//           </div>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default BasicTrees;


import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTree } from "@/Constant";
import { BasicTreeData, TreeViewList } from "@/Data/BonusUi/TreeView";
import { handleTreeViewCheckChange, processTreeViewItems, TreeView, TreeViewCheckDescriptor, TreeViewExpandChangeEvent } from "@progress/kendo-react-treeview";
import { useState } from "react";
import { Card, CardBody } from "reactstrap";

const BasicTrees = () => {
  const checkField = "checked";

  type TreeState = {
    check: TreeViewCheckDescriptor;
    items: typeof TreeViewList;
  };

  const [treeState, setTreeState] = useState<TreeState>({
    check: { idField: "text", applyCheckIndeterminate: true, ids: [] },
    items: TreeViewList,
  });
  const onCheckChange = (event: any) => {
    const settings = { checkChildren: true, checkParents: true };
    const newCheck = handleTreeViewCheckChange(event, treeState.check, [treeState.items], settings) as TreeViewCheckDescriptor;
    setTreeState((prevState) => ({
      ...prevState,
      check: { ...prevState.check, ...newCheck },
    }));
  };

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    event.item.expanded = !event.item.expanded;
    setTreeState((prevState: any) => ({ ...prevState, items: [...prevState.items] }));
  };

  return (
    <Card>
      <CommonCardHeader title={BasicTree} span={BasicTreeData} />
      <CardBody>
        <div className='tree-container'>
          <TreeView
            data={processTreeViewItems(treeState.items, {
              check: treeState.check,
            })}
            checkField={checkField}
            checkboxes={true}
            onCheckChange={onCheckChange}
            expandIcons={true}
            onExpandChange={onExpandChange}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default BasicTrees;
