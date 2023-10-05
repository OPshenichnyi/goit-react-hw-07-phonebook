import { changeFindStr } from "components/redux/filterSlice"
import { CssFilterWrrap } from "./Filter.styled"
import { useDispatch} from "react-redux"


export const Filter = () => {
    const dispatch = useDispatch()
    return (
        <CssFilterWrrap>
            <label htmlFor="name">
                Filter
                <br />
                <input
                    type="text"
                    name="filter"
                    onChange={(e) => {
                        e.preventDefault()
                        dispatch(changeFindStr(e.target.value))
                    }}
                />
            </label>
        </CssFilterWrrap>
    )
}