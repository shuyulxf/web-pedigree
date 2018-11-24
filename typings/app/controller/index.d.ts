// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import AboutAbout from '../../../app/controller/about/about';
import ApiPedigree from '../../../app/controller/api/pedigree';
import HomeHome from '../../../app/controller/home/home';

declare module 'egg' {
  interface IController {
    about: {
      about: AboutAbout;
    };
    api: {
      pedigree: ApiPedigree;
    };
    home: {
      home: HomeHome;
    };
  }
}
