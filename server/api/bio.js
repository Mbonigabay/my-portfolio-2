import { createRouter, useBase } from 'h3';

const router = createRouter();

router.get('/', () => 'Software engineer with more than 4 years of experience in software development where I acquired my experience working as full-stack developer with Java (SpringBoot) and Javascript (Angular) as my main stack.');

export default useBase('/api/bio', router.handler);