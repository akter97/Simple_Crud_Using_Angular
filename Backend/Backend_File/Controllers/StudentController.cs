using Backend_File.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend_File.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly StudentDbContext db;

        public StudentController(StudentDbContext _db)
        {
            db = _db;
        }

        [HttpGet]
        [Route("GetStudent")]
        public async Task<IEnumerable<Student>> GetStudents()
        {
            return await db.Student.ToListAsync();
        }

        [HttpPost]
        [Route("AddStudent")]
        public async Task<Student> AddStudent(Student objStudent)
        {
            db.Student.Add(objStudent);
            await db.SaveChangesAsync();
            return objStudent;
        }

        [HttpPatch]
        [Route("UpdateStudent/{id}")]
        public async Task<Student> UpdateStudent(Student objStudent)
        {
            db.Entry(objStudent).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return objStudent;
        }

        [HttpDelete]
        [Route("DeleteStudent/{id}")]
        public bool DeleteStudent(int id)
        {
            bool a = false;
            var student = db.Student.Find(id);
            if (student != null)
            {
                a = true;
                db.Entry(student).State = EntityState.Deleted;
                db.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }

    }

}