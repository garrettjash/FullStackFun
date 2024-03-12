using System.ComponentModel.DataAnnotations;

namespace APIFun.Data
{
    public class MarriottFood
    {

        [Key]
        public int FoodId { get; set; }
        public string EventName { get; set; }
        public string VendorName { get; set; }
        public int FoodRating { get; set;}
    }
}
