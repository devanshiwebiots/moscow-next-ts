// import { Card, CardBody } from "reactstrap";
// import TreeView, { flattenTree } from "react-accessible-treeview";
// // import { ArrowIcon, CheckBoxIcon } from "./BasicTrees";
// import { DisableTreeData, TreeViewList } from "@/Data/BonusUi/TreeView";
// import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
// import { DisabledTrees } from "@/Constant";

// const DisabledTree = () => {
//   const disableTreeData = flattenTree(TreeViewList);

//   return (
//     <Card>
//       <CommonCardHeader title={DisabledTrees} span={DisableTreeData} />
//       <CardBody>
//         <div className="disabled-container">
//           <div className="checkbox">
//             <TreeView data={disableTreeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards defaultSelectedIds={[4,9]} defaultDisabledIds={[2,3,4,5,6,7,8,9,10,11,12]} togglableSelect expandedIds={[1,2,6,10,14,27]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isDisabled, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
//                 return (
//                   <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), opacity: isDisabled ? 0.5 : 1,marginTop:5 }}>
//                     {/* {isBranch && <ArrowIcon isOpen={isExpanded} />}<CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span> */}
//                     </div>
//                 );
//               }}
//             />
//           </div>
//         </div>
//       </CardBody>
//     </Card>
//   );
// };

// export default DisabledTree;

import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisabledTrees } from "@/Constant";
import { DisabledTreeViewList, DisableTreeData } from "@/Data/BonusUi/TreeView";
import { handleTreeViewCheckChange, processTreeViewItems, TreeView, TreeViewCheckDescriptor, TreeViewExpandChangeEvent } from "@progress/kendo-react-treeview";
import { useState } from "react";
import { Card, CardBody } from "reactstrap";

const DisabledTree = () => {
  const checkField = "checked";

  type TreeState = {
    check: TreeViewCheckDescriptor;
    items: typeof DisabledTreeViewList;
  };

  const [treeState, setTreeState] = useState<TreeState>({
    check: { idField: "text", applyCheckIndeterminate: true, ids: [] },
    items: DisabledTreeViewList,
  });

  const onCheckChange = (event: any) => {
    const settings = { checkChildren: true, checkParents: true };
    const newCheck = handleTreeViewCheckChange(event, treeState.check, treeState.items, settings) as TreeViewCheckDescriptor;
    setTreeState((prevState) => ({
      ...prevState,
      check: { ...prevState.check, ...newCheck },
    }));
  };

  const onExpandChange = (event: TreeViewExpandChangeEvent) => {
    event.item.expanded = !event.item.expanded;
    setTreeState((prevState) => ({
      ...prevState,
      items: [...prevState.items],
    }));
  };

  return (
    <Card>
      <CommonCardHeader title={DisabledTrees} span={DisableTreeData} />
      <CardBody>
        <div className='disabled-container'>
          <div className='checkbox'>
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
        </div>
      </CardBody>
    </Card>
  );
};

export default DisabledTree;
