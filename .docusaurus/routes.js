import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '9ee'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6ca'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '846'),
            routes: [
              {
                path: '/appendices/appendix-a-installation',
                component: ComponentCreator('/appendices/appendix-a-installation', '316'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/appendices/appendix-b-setup',
                component: ComponentCreator('/appendices/appendix-b-setup', '55e'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/appendices/appendix-c-troubleshooting',
                component: ComponentCreator('/appendices/appendix-c-troubleshooting', '585'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/appendices/appendix-e-code-templates',
                component: ComponentCreator('/appendices/appendix-e-code-templates', 'a3b'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/appendices/appendix-g-resources',
                component: ComponentCreator('/appendices/appendix-g-resources', '8cc'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch01-introduction/',
                component: ComponentCreator('/ch01-introduction/', 'e0b'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch01-introduction/exercises/chapter1-quiz',
                component: ComponentCreator('/ch01-introduction/exercises/chapter1-quiz', '6db'),
                exact: true
              },
              {
                path: '/ch02-fundamentals/',
                component: ComponentCreator('/ch02-fundamentals/', '586'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch02-fundamentals/exercises/chapter2-quiz',
                component: ComponentCreator('/ch02-fundamentals/exercises/chapter2-quiz', 'ccc'),
                exact: true
              },
              {
                path: '/ch03-ros2-architecture/',
                component: ComponentCreator('/ch03-ros2-architecture/', '739'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch03-ros2-architecture/exercises/chapter3-quiz',
                component: ComponentCreator('/ch03-ros2-architecture/exercises/chapter3-quiz', '5a9'),
                exact: true
              },
              {
                path: '/ch04-gazebo-simulation/',
                component: ComponentCreator('/ch04-gazebo-simulation/', '77b'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch04-gazebo-simulation/exercises/chapter4-quiz',
                component: ComponentCreator('/ch04-gazebo-simulation/exercises/chapter4-quiz', 'e68'),
                exact: true
              },
              {
                path: '/ch05-isaac-platform/',
                component: ComponentCreator('/ch05-isaac-platform/', '11e'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch05-isaac-platform/exercises/chapter5-quiz',
                component: ComponentCreator('/ch05-isaac-platform/exercises/chapter5-quiz', 'c8d'),
                exact: true
              },
              {
                path: '/ch06-urdf-xacro/',
                component: ComponentCreator('/ch06-urdf-xacro/', '16c'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch06-urdf-xacro/exercises/chapter6-quiz',
                component: ComponentCreator('/ch06-urdf-xacro/exercises/chapter6-quiz', 'a75'),
                exact: true
              },
              {
                path: '/ch07-perception-systems/',
                component: ComponentCreator('/ch07-perception-systems/', 'bf1'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch07-perception-systems/exercises/chapter7-quiz',
                component: ComponentCreator('/ch07-perception-systems/exercises/chapter7-quiz', '866'),
                exact: true
              },
              {
                path: '/ch08-navigation/',
                component: ComponentCreator('/ch08-navigation/', '125'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch08-navigation/exercises/chapter8-quiz',
                component: ComponentCreator('/ch08-navigation/exercises/chapter8-quiz', '050'),
                exact: true
              },
              {
                path: '/ch09-manipulation/',
                component: ComponentCreator('/ch09-manipulation/', '861'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch09-manipulation/exercises/chapter9-quiz',
                component: ComponentCreator('/ch09-manipulation/exercises/chapter9-quiz', '054'),
                exact: true
              },
              {
                path: '/ch10-vla-models/',
                component: ComponentCreator('/ch10-vla-models/', '66a'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch11-humanoid-design/',
                component: ComponentCreator('/ch11-humanoid-design/', '108'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch12-learning-adaptation/',
                component: ComponentCreator('/ch12-learning-adaptation/', 'bfe'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch13-multi-robot-systems/',
                component: ComponentCreator('/ch13-multi-robot-systems/', 'f39'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch14-safety-ethics/',
                component: ComponentCreator('/ch14-safety-ethics/', '9a8'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch15-capstone-project/',
                component: ComponentCreator('/ch15-capstone-project/', '541'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ch15-capstone-project/exercises/chapter15-quiz',
                component: ComponentCreator('/ch15-capstone-project/exercises/chapter15-quiz', 'e1e'),
                exact: true
              },
              {
                path: '/getting-started/intro',
                component: ComponentCreator('/getting-started/intro', '100'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/reference/api-reference',
                component: ComponentCreator('/reference/api-reference', '573'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/reference/dependencies',
                component: ComponentCreator('/reference/dependencies', '398'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/reference/glossary',
                component: ComponentCreator('/reference/glossary', 'd91'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/reference/hardware-specs',
                component: ComponentCreator('/reference/hardware-specs', 'ca2'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/reference/quiz-template',
                component: ComponentCreator('/reference/quiz-template', '3f9'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'c48'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
