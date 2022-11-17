import express from 'express'
import WorkShop from '../Modal/workShopSchema.js'
// import Product from '../Modal/productSchema.js'
const router = express.Router();


// Creating the Worksjop

router.post('/createworkshop', async (req, res) => {
    try {
        console.log(req.body);
        const { workshopname, venue, type, url, date } = req.body;
        
        const newWorkshop = await WorkShop.create({
            workshopname,
            venue,
            type,
            url,
            date
        });
        res.status(200).json(newWorkshop)

    } catch (error) {
        res.status(400).send(error.message);
        console.log(error.message);
    }

})


// Get all the Workshop

router.get('/workshops', async (req, res) => {

    try {
        // console.log("yes");
        const Workshops = await WorkShop.find({});
        res.status(200).json(Workshops)

    } catch (error) {
        res.status(400).send(error.message);
        console.log(error.message);
    }

})


// Get a particular Workshop

router.get('/workshop/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const workshop = await WorkShop.findById(id)
        // console.log(workshop);
        res.status(200).json(workshop);

    } catch (error) {
        res.status(400).send(error.message);
        console.log(error.message);
    }
})

// update the Workshop

router.put('/updateworkshop/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { workshopname, venue, type, url, date } = req.body;

        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const updatedworkshop = { workshopname, venue, type, url, date, _id: id }

        const workshopupdated = await WorkShop.findByIdAndUpdate(id, updatedworkshop, { new: true })

        res.status(200).json(workshopupdated);

    } catch (error) {
        res.status(400).send(error.message);
        console.log(error.message);
    }
})


// Creating a API to order something

// router.get('/item/order/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const isitem = await Item.findById(id)
//         const addproduct = await Product.create({
//             itemname: isitem.itemname,
//             price: isitem.price,
//             description: isitem.description,
//             img: isitem.img,
//             createdAt: new Date().toISOString()
//         });
//         if (isitem) {


//             res.status(200).send(addproduct);

//             //  await Item.findByIdAndDelete(id);
//         }


//     } catch (error) {
//         res.status(400).send(error.message);
//         console.log(error.message);
//     }
// })


// // API to get all the previous ORDER

// router.get('/previousorder', async (req, res) => {

//     try {
//         const product = await Product.find({});
//         res.status(200).send(product)

//     } catch (error) {
//         res.status(402).send("new",error.message);
//         console.log(error.message);
//     }
// })


export default router;