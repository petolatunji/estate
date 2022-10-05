import './search.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SearchIcon from '@mui/icons-material/Search'
const Search = () => {
  return (
    <div className='ssearch'>
      <div className='searchCont'>
        <span className='seaSpan'>
          <p className='pic'>
            Location <ArrowDropDownIcon />
          </p>
        </span>
        <span className='seaSpan'>
          <p className='pic'>
            Property Type <ArrowDropDownIcon />
          </p>
        </span>
        <span className='seaSpan'>
          <p className='pic'>
            Max Price <ArrowDropDownIcon />
          </p>
        </span>
        <span className='seaSpan'>
          <input type='text' placeholder=' Search' />
          <SearchIcon className='sIcon' />
        </span>
      </div>
    </div>
  )
}

export default Search
