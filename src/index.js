module.exports = {
  getComponentPaths () {
    return {
      'custom-chain': 'components/custom-chain.js'
    }
  },

  getRoutes () {
    return [
      {
        component: 'custom-chain',
        name: 'custom-chain',
        path: '/custom-chain'
      }
    ]
  },

  getMenuItems () {
    return [
      {
        routeName: 'custom-chain',
        title: 'My custom chain'
      }
    ]
  }
}
