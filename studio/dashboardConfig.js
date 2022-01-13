export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '61e011abe955de33e46e9fbb',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-h4mdibh5',
                  apiId: 'cf45b490-8a0d-423a-a599-716bbed6eeac'
                },
                {
                  buildHookId: '61e011abcca4413cc17ee1bc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-z4dboc29',
                  apiId: 'cbf7fd9d-14de-4de3-86a7-955979af61ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sammynacole6/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-z4dboc29.netlify.app', category: 'apps'}
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
