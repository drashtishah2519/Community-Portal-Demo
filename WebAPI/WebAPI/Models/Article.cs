using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Article
    {
        [Key]
        [Required]
        public int Article_id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string Title { get; set; }

        [Required]
        [ForeignKey("Category")]
        public short CategoryId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(300)")]
        public string Content { get; set; }
        public DateTime PostedOn { get; set; }
        public Category Category { get; set; }
    }
}
