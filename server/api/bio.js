import { createRouter, useBase } from 'h3';

const router = createRouter();

router.get('/', () => 'I am a software engineer with a bachelor degree in Information Technology with major in Software engineering and currently, working as a software engineer at Irembo');

export default useBase('/api/bio', router.handler);