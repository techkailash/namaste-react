import { memo } from "react";

const User = () => {
    console.log('user render');
    return (
        <span>User Name</span>
    )
}

export default memo(User);