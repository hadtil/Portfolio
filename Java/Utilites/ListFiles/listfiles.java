import java.io.File;

class listfiles {

    // Taken from:
    // https://attacomsian.com/blog/java-list-all-files-in-a-directory
    public static void listFilesRecursive(File folder) {
        for (final File file : folder.listFiles()) {
            if (file.isDirectory()) {
                // uncomment this to list folders too
                System.out.println(file);
                listFilesRecursive(file);
            } else {
                System.out.println(file);
            }
        }
    }

    public static void main(String args[]) {

        System.out.println("Hello Java - Program to list files and folders");

        File folder = new File(".");
        listFilesRecursive(folder);
    }
}
