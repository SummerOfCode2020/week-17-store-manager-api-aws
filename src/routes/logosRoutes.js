
const router = require('express').Router();
const {deleteLogo, updateLogo, createLogo, getLogos} = require('../database/logos');

router.get('/', async (req, res) => {
  res.send(await getLogos());
});

router.post('/', async (apiRequest, apiResponse) => {
  const newLogo = apiRequest.body;
  await createLogo(newLogo);
  apiResponse.send({
    message: 'New logo created.',
    allLogos: await getLogos(),
  });
});

router.delete('/:logoId', async (apiRequest, apiResponse) => {
  await deleteLogo(apiRequest.params.logoId);
  apiResponse.send({ message: 'logo deleted.' });
});

// endpoint to update a logo
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedLogo = apiRequest.body;
  console.log({ updateLogo })
  await updateLogo(apiRequest.params.id, updatedLogo);
  apiResponse.send({ message: 'logo updated.' });
});

module.exports = router;
