using IRunes.Models;
using System;

namespace IRunesApp.Models
{
    public class TrackAlbum
    {
        public Guid AlbumId { get; set; }
        public virtual Album Album { get; set; }

        public Guid TrackId { get; set; }
        public virtual Track Track { get; set; }
    }
}
