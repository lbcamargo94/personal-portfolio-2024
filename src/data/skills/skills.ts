import { IDataSkill } from "@/interfaces/DataSkills/ISkills";
import AngularJs from "../../assets/icons/file-type-angular.svg";
import Javascript from "../../assets/icons/file-type-js-official.svg";
import NodeJs from "../../assets/icons/file-type-node.svg";
import Postgres from "../../assets/icons/file-type-postgresql.svg";
import PrismaOrm from "../../assets/icons/file-type-prisma.svg";
import Python from "../../assets/icons/file-type-python.svg";
import React from "../../assets/icons/file-type-reactjs.svg";
import Next from "../../assets/icons/file-type-nextjs.svg";
import Typescript from "../../assets/icons/file-type-typescript-official.svg";
import VueJs from "../../assets/icons/file-type-vue.svg";

const DataSkills: IDataSkill[] = [
  {
    image: {
      alt: `${AngularJs}`,
      src: `${AngularJs}`,
    },
    rate: 10,
    skill: "Angular.js",
  },
  {
    image: {
      alt: `${VueJs}`,
      src: `${VueJs}`,
    },
    rate: 20,
    skill: "VueJs.js",
  },
  {
    image: {
      alt: `${NodeJs}`,
      src: `${NodeJs}`,
    },
    rate: 30,
    skill: "NodeJs.js",
  },
  {
    image: {
      alt: `${Postgres}`,
      src: `${Postgres}`,
    },
    rate: 40,
    skill: "Postgres",
  },
  {
    image: {
      alt: `${PrismaOrm}`,
      src: `${PrismaOrm}`,
    },
    rate: 50,
    skill: "PrismaOrm",
  },
  {
    image: {
      alt: `${Python}`,
      src: `${Python}`,
    },
    rate: 60,
    skill: "Python",
  },
  {
    image: {
      alt: `${React}`,
      src: `${React}`,
    },
    rate: 70,
    skill: "React.js",
  },
  {
    image: {
      alt: `${Next}`,
      src: `${Next}`,
    },
    rate: 80,
    skill: "Next",
  },
  {
    image: {
      alt: `${Typescript}`,
      src: `${Typescript}`,
    },
    rate: 90,
    skill: "Typescript",
  },
  {
    image: {
      alt: `${Javascript}`,
      src: `${Javascript}`,
    },
    rate: 100,
    skill: "Javascript",
  },
];

export default DataSkills;
