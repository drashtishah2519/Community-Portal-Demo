﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class ProductMaster
    {
        [Key]
        [Column("Product_Id")]
        public int productId { get; set; }
        [Required]
        [Column("Product_Name")]
        public string ProductName { get; set; }
        [Required]
        [Column("Product_Description")]
        public string ProductDescription { get; set; }
        [Required]
        [ForeignKey("AspNetUsers")]
        [Column("User_Id")]
        public string Id { get; set; }
        public ApplicationUser AspNetUsers { get; set; }    
    }
}
