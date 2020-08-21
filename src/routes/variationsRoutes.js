const router = require('express').Router();
const {deleteVariation, updateVariation, createVariation, getVariations} = require('../database/variations');

router.get('/', async (req, res) => {
  res.send(await getVariations());
});

router.post('/', async (apiRequest, apiResponse) => {
  const newVariation = apiRequest.body;
  await createVariation(newVariation);
  apiResponse.send({
    message: 'New variation created.',
    allStores: await getVariations(),
  });
});

router.delete('/:variationId', async (apiRequest, apiResponse) => {
  await deleteVariation(apiRequest.params.variationId);
  apiResponse.send({ message: 'Variation deleted.' });
});

// endpoint to update a Store
router.put('/:variationId', async (apiRequest, apiResponse) => {
  const updatedVariation = apiRequest.body;
  console.log({ updateVariation })
  await updateVariation(apiRequest.params.variationId, updatedVariation);
  apiResponse.send({ message: 'Variation updated.' });
});

module.exports = router;