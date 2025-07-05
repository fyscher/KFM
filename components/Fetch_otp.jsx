const Fetch_otp = ({
    getOTPCode,
    OTP
}) =>
{
    const time = new Date(OTP.expireAt).toLocaleString()
    const label = OTP.code? `Expiration: ${time}`: ''
    return ( 
        <div className="OTP">
            <div>Code: {OTP.code}</div>
            <div>{label}</div>
            <button type="button" onClick={getOTPCode}>New Code</button> 
        </div>
    )
}

export default Fetch_otp;