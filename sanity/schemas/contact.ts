const contact = {
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Logo',
      type: 'image',
      options: [
        {
          hotspot: true,
        },
      ],
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'googlemap',
      title: 'Google Map',
      type: 'string',
    },
    {
      name: 'gps',
      title: 'GPS Address',
      type: 'string',
    },
  ],
};

export default contact 
