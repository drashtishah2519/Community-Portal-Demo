using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class ArticleCommentCreate
    {
        [Key]
        public int ArticleCommentId { get; set; }
        
        public long PostId { get; set; }

        [Required(ErrorMessage = "Content is required")]
        [MinLength(10, ErrorMessage = "Must be 10-300 characters")]
        [MaxLength(300, ErrorMessage = "Must be 10-300 characters")]
        public string Content { get; set; }
        public string UserName { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
