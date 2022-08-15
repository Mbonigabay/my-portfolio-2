import { createRouter, useBase } from 'h3';

const router = createRouter();

router.get('/', () => 'I am a software developer with a bachelor degree in Information Technology with major in Software engineering and currently, working as an application developer at REG/EUCL');

export default useBase('/api/bio', router.handler);