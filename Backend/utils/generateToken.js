import Jwt from "jsonwebtoken"
const generateTokenAndSetCookie = (userId, res) =>{
    const token = Jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: "15d",
    });

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //miliseconds
        httpOnly: true, // prevents xss attacks and cross site scripting
        sameSize: "strict", // CSRF attacks forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;