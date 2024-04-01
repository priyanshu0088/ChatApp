export const sendMessage = async (req, res) => {
   try {
    
    const {message} = req.body;
    const {id} = req.params;
    const senderid = req.user._id
   } catch (error) {
    console.log("Error in SendMessage controller", error.message)
    res.ststus(500).json({error: "Internal server error"});
   }
};