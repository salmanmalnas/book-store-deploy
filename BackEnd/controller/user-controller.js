import User from "../model/user-model.js";
import bcryptjs from "bcryptjs";

// Signup function
export const signup = async (req,res) => {
    try{
        const { fullname, number, email, password } = req.body;

         // Check if the user already exists by email
        const userByEmail  = await User.findOne({ email });

        if (userByEmail ) {
            return res.status(400).json({message: "User already exists" });
        }
         
        // Check if the user already exists by number
        const userBynumber = await User.findOne({ number });
        if (userBynumber) {
            return res.status(400).json({ message: "number already exists" });
        }

        // Create a new user if email and number are unique
        const hashpassword =await bcryptjs.hash(password,10)
        const createdUser = new User ({
            fullname: fullname,
            number: number,
            email: email,
            password: hashpassword,
        });
        await createdUser.save();   
        res.status(201).json({message:"User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
            }

        });
    }
    catch (error){
        if (error.code === 11000) {
            if (error.keyValue.email) {
                return res.status(400).json({ message: "Email already exists" });
            }
            if (error.keyValue.number) {
                return res.status(400).json({ message: "number number already exists" });
            }
        }
        console.log("Error: "+ error.message)
        res.status(500).json({message:"Internal server error"});
    }
};

// Login function
export const login = async (req,res) => {
    try{
        const {email, password} = req.body;
        const userByEmail  = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, userByEmail.password);
        if (!userByEmail ){
            return res.status(400).json({message:"Invalid email"});
        }else if (!isMatch){
            return res.status(400).json({message:"Invalid password"});
        }else{
            return res.status(200).json({
                message:"Login Successfully!",
                userByEmail: {
                    _id: userByEmail ._id,
                    fullname: userByEmail .fullname,
                    number: userByEmail .number,
                    email: userByEmail .email,
                }
            });
        }
    }
    catch(error){
        console.log("Error : "+ error.message)
        res.status(500).json({massage:"Internal server error"})
    }
}

// for fetching user data
export const getUsers = async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
};