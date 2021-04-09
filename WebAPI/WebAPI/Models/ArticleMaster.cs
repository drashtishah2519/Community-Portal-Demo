﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class ArticleMaster
    {
        [Key]
        [Column("Article_Id")]
        public int ArticleId { get; set; }
        [Required]
        [Column("Article_Title")]
        public string ArticleTitle { get; set; }
        [Required]
        [ForeignKey("CategoryMaster")]
        [Column("Category_Id")]
        public int CategoryId { get; set; }
        [Required]
        [ForeignKey("SectionMaster")]
        [Column("Section_Id")]
        public int SectionId { get; set; }
        [Required]
        [ForeignKey("AspNetUsers")]
        [Column("User_Id")]
        public string Id { get; set; }
        [Column("Reviewer_Id")]
        public string ReviewerId { get; set; }
        [Required]
        [ForeignKey("ProductMaster")]
        [Column("Product_Id")]
        public int ProductId { get; set; }
        [Required]
        [Column("Description")]
        public string ArticleDescription { get; set; }
        [Required]
        [Column("Visibility")]
        public string Visible { get; set; }
        [Required]
        [Column("Status")]
        public bool Status { get; set; }
        [Column("CommentAllow")]
        public bool CommentAllow { get; set; }
        [Column("UseFullTotal")]
        public int UseFullTotal { get; set; }
        [Column("UseFullCount")]
        public int UseFullCount { get; set; }
        [Required]
        [Column("Draft")]
        public bool Draft { get; set; }
        [Required]
        [Column("Archive")]
        public bool Archive { get; set; }
    }
}
