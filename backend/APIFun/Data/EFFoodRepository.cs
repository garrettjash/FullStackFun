namespace APIFun.Data
{
    public class EFFoodRepository : IFoodRepository
    {
        private FoodContext _foodContext;
        public EFFoodRepository(FoodContext temp) {
            _foodContext = temp;
        }
        public IEnumerable<MarriottFood> Foods => _foodContext.Foods;
    }
}
