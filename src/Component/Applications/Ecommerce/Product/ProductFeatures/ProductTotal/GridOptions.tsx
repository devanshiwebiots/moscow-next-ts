import { Href } from "@/Constant";
import { FilterProductData } from "@/Data/Applications/Ecommerce";
import { useAppDispatch } from "@/Redux/Hooks";
import { setColView } from "@/Redux/Reducers/FilterSlice";

export const GridOptions = () => {
  const dispatch = useAppDispatch();
  const LayoutView = (colClass: string) => dispatch(setColView(colClass));

  return (
    <div className="grid-options d-inline-block grid-options-card">
      <ul>
        {FilterProductData.map((data, index) => (
          <li key={index}>
            <a className={`product-${data.id}-layout-view`} href={Href} onClick={() => LayoutView(data.colClass)}>
              {data.filterData.map((item, number) => (
                <span key={number} className={`line-grid line-grid-${item} bg-primary`}></span>
              ))}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
