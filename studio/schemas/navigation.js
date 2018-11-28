export default {
  title: "Navigation",
  name: "navigation",
  type: "document",
  fields: [
    // ... lots of fields, probably ...
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      title: 'Links',
      name: 'links',
      // A reference is a way to point to another document
      type: 'array',
      // This reference is only allowed to point to a document of the type person,
      // we could list more types, but let's keep this simple:
      of: [{type: 'navigationItem'}]
    },
  ]
}
