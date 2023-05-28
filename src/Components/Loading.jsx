import { Circles } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div >
            <Circles
                height="80"
                width="80"
                color="var(--grey-navbar)"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass="overrideSpinner"
                visible={true}
            />
        </div>
    )
}
export default Loading