const Fetch_otp = ({
    getOTPCode,
    OTP
}) =>
{
    return ( 
        <div className="OTP">
            <div>{OTP.code} expires at: {OTP.expireAt}</div>
            <button type="button" onClick={getOTPCode}>Get Code</button>
        </div>
    )
}

export default Fetch_otp;