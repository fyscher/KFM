const Fetch_otp = ({
    getOTPCode,
    OTP
}) =>
{
    const time = new Date(OTP.expireAt).toLocaleString()
    const code = OTP.code? `Code: ${OTP.code}`: ''
    const expiry = OTP.expireAt? `Expiration: ${time}`: ''

    return ( 
        <div className="OTP">
            <div>{code}</div>
            <div>{expiry}</div>
            <button type="button" onClick={getOTPCode}>New Code</button> 
        </div>
    )
}

export default Fetch_otp;