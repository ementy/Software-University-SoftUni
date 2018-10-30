using IRunesApp.Models;
using System;
using System.Collections.Generic;

namespace IRunes.Models
{
    public class Album : BaseModel<Guid>
    {
        private const int discountPercent = 13;

        public Album()
        {
            this.Tracks = new HashSet<TrackAlbum>();
        }
        public string Name { get; set; }

        public string Cover { get; set; }

        public decimal Price { get; set; } //=> this.Tracks.Sum(x => x.Price) * (1 - discountPercent / 100);

        //TODO: Add collection of Track
        public virtual ICollection<TrackAlbum> Tracks { get; set; }

        //public User CreatedBy { get; set; }
    }
}
