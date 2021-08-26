export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61270e7fecd48e459c2ab5f7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-gmp2nnoi',
                  apiId: 'f617b63c-344e-451c-8c45-0f45d61d61b0'
                },
                {
                  buildHookId: '61270e7f350af14de437055a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-kdcp5646',
                  apiId: 'd31fc037-d9d6-4425-bfc3-72d243e12a20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eric9ten/sanity-kitchen-sink-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-kdcp5646.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
