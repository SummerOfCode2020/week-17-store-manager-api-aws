const router = require('express').Router();
const {deleteProductType, updateProductType, createProductType, getProductTypes} = require('../database/product-types');

router.get('/', async (apiRequest, apiResponse) => {
  apiResponse.send(await getProductTypes());
});

// we name our parameters apiRequest and apiResponse here but
// there is no strong reason these variables could not be named `req` and `res` or `request` and `response`
// the reason for this naming is so we are thinking about "api" tonight
router.post('/', async (apiRequest, apiResponse) => {
  const newProductType = apiRequest.body;
  await createProductType(newProductType);
  apiResponse.send({
    message: 'New product type created.',
    allProductTypes: await getProductTypes(),
    thanks: true
  });
});

// endpoint to delete a product
router.delete('/:productTypeId', async (apiRequest, apiResponse) => {
  await deleteProductType(apiRequest.params.productTypeId);
  apiResponse.send({ message: 'Product type deleted.' });
});

// endpoint to update a product
router.put('/:productTypeId', async (apiRequest, apiResponse) => {
  const updatedProductType = apiRequest.body;
  console.log({ updatedProductType})
  await updateProductType(apiRequest.params.productTypeId, updatedProductType);
  apiResponse.send({ message: 'Product type updated.' });
});

module.exports = router;



