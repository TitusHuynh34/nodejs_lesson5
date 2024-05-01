export class FeatureRepo {
  static _features = [
    {
      id: "1",
      icon: '<i class="fas fa-car-side fa-3x text-white"></i>',
      title: "Free Shipping",
      subtitle: "Free on order over $300",
    },
    {
      id: "2",
      icon: '<i class="fas fa-user-shield fa-3x text-white"></i>',
      title: "Security Payment",
      subtitle: "100% security payment",
    },
  ];

  static getFeatures() {
    return this._features;
  }
}
