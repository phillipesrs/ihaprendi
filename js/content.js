$(document).ready(function () {
    $.getJSON('http://ihaprendi.com/content.json', function (data) {

        console.log(data);
        if (data.teachers != undefined && data.teachers.length > 0) {
            $.each(data.teachers, function (i, teacher) {
                $('#teachers-content').append(renderTeacher(teacher));
            });
        }

        if (data.testimonials != undefined && data.testimonials.length > 0) {
            $.each(data.testimonials, function (i, testimonial) {
                $('#testimonials-content').append(renderTestimonial(testimonial));
            });
        }

        $('[data-toggle="popover"]').popover({
            html: true,
            placement: 'bottom',
            trigger: 'hover'
        });
    });
});

function renderTestimonial(testimonial) {
    var html = '<div class="col-sm-12 col-md-6">';
    html += '<div class="item quote-item clearfix">';
    html += '<div class="text bg-white">';
    html += '<div>';
    html += '<p>' + testimonial.message + '</p>';
    html += '</div>';
    html += '</div>';
    html += '<div class="rounded-img" style="background-image:url(' + testimonial.photo + ')"></div>';
    html += '<div class="author">';
    html += '<strong>' + testimonial.author + '</strong>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderTeacher(teacher) {
    var html = '<div class="col-xs-12 col-sm-6 col-md-4">';
    html += '<div class="item team-member text-center">';
    html += '<figure class="image-container inline-center">';
    html += '<div class="teacher-picture" style="background-image:url(' + teacher.photo + ')"></div>';
    html += '</figure>';
    html += '<div class="info">';
    html += '<h3>' + teacher.name + '</h3>';
    html += '<span class="role">' + teacher.role + '</span>';
    html += '<p class="text-justify">' + teacher.description + '</p>';
    html += '<ul class="social-wrapper list-unstyled clearfix">';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}