import { useAppDispatch } from '@/Redux/Hooks';
import { setSearchTerm } from '@/Redux/Reducers/TableSearchSlice';
import { Input } from 'reactstrap';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (e: { target: { value: any; }; }) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className='dataTables_filter'>
      <label>
        Search:
      </label>
      <Input type='search' onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
