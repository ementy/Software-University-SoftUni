using IRunesApp.Models;
using System;
using System.Collections.Generic;

namespace IRunes.Models
{
    public class Track : BaseModel<Guid>
    {
        public Track()
        {
            this.Albums = new HashSet<TrackAlbum>();
        }
        public string Name { get; set; }

        public string Link { get; set; }

        public decimal Price { get; set; }

        public virtual ICollection<TrackAlbum> Albums { get; set; }

        //public User CreatedBy { get; set; }
    }
}
