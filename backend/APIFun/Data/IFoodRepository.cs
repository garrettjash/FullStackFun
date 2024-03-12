namespace APIFun.Data
{
    public interface IFoodRepository
    {
        IEnumerable<MarriottFood> Foods { get; }
    }
}
