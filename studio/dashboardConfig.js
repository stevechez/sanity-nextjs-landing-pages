export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f923fff7e59932b73b2bc8d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p316asux',
                  apiId: 'e4e5476c-18d7-4077-b507-d9060e61d110'
                },
                {
                  buildHookId: '5f9240003c8d02292469b32e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g1zoq16x',
                  apiId: '8071e476-d774-4e99-a0fa-b9ba7f3e1b0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevechez/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g1zoq16x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
