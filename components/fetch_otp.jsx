const Fetch_otp = ({
    getOTPCode,
    OTP
}) =>
{
    return ( 
        <>
            <div>{OTP.code} expires at: {OTP.expireAt}</div>
            <button type="button" onClick={getOTPCode}>Get Code</button>
        </>
    )
}

export default Fetch_otp;